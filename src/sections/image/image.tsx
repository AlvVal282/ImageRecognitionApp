import React, { useState } from 'react';
import { Button, FormHelperText, Grid, InputLabel, Stack, Typography, CardContent, Card, Box, Chip } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'components/@extended/AnimateButton';
import axios from 'utils/axios';
import Image from 'next/image';

interface IAnalysisResult {
  tags: { name: string; confidence: number }[];
  description: { captions: { text: string; confidence: number }[] };
  metadata: { height: number; width: number; format: string };
}

interface IImageProps {
  onSuccess: () => void;
  onError: (msg: string) => void;
}

function useImageUpload() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
      'image/gif': ['.gif']
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setImagePreview(URL.createObjectURL(file));
      }
    }
  });

  return { getRootProps, getInputProps, imagePreview, setImagePreview };
}

export default function ImageRecognition({ onSuccess, onError }: IImageProps) {
  const [analysisResult, setAnalysisResult] = useState<IAnalysisResult | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [prevImagePreview, setPrevImagePreview] = useState<string | null>(null);

  const { getRootProps, getInputProps, imagePreview, setImagePreview } = useImageUpload();

  return (
    <>
      <Formik
        initialValues={{ image: null, submit: null }}
        validationSchema={Yup.object().shape({
          image: Yup.mixed()
            .required('An image is required')
            .test(
              'fileType',
              'Unsupported file type. Please upload a JPEG, PNG, or GIF image.',
              (value) => value && ['image/jpeg', 'image/png', 'image/gif'].includes((value as File)?.type)
            )
        })}
        onSubmit={(values, { setErrors, setSubmitting, resetForm }) => {
          const formData = new FormData();
          if (values.image) {
            formData.append('image', values.image as File);
          }

          axios
            .post('/analyze', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
            .then((response) => {
              console.log(response.data);
              setSubmitting(false);
              resetForm();
              setAnalysisResult(response.data);
              setShowResult(true);
              setImagePreview(null);
              setPrevImagePreview(imagePreview);
              onSuccess();
            })
            .catch((error) => {
              const errorMessage = error.response?.data?.error || error.message || 'An unexpected error occurred';
              setErrors({ submit: errorMessage });
              setSubmitting(false);
              setShowResult(false);
              onError(errorMessage);
            });
        }}
      >
        {({ values, errors, touched, handleSubmit, isSubmitting, setFieldValue }) => {
          return (
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Stack spacing={1} justifyContent="center" alignItems="center">
                    <InputLabel htmlFor="image">Upload an Image</InputLabel>
                    <Box
                      {...getRootProps()}
                      sx={{
                        border: '2px dashed gray',
                        padding: 4,
                        textAlign: 'center',
                        cursor: 'pointer',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 300,
                        height: 200
                      }}
                    >
                      <input {...getInputProps()} {...handleImageChange(setFieldValue)} />
                      <Typography variant="h6">Drag & drop an image here, or click to select one</Typography>
                      <Button variant="contained" sx={{ mt: 2 }}>
                        Upload Image
                      </Button>
                    </Box>

                    {imagePreview && (
                      <Box mt={2} textAlign="center">
                        <Image src={imagePreview} alt="Preview" width="200" height="200" />
                      </Box>
                    )}
                  </Stack>
                  {touched.image && errors.image && <FormHelperText error>{errors.image}</FormHelperText>}
                </Grid>

                <Grid item xs={12}>
                  <AnimateButton>
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      ANALYZE
                    </Button>
                  </AnimateButton>
                </Grid>
              </Grid>
            </form>
          );
        }}
      </Formik>

      {showResult && analysisResult && (
        <Grid container spacing={3} sx={{ marginTop: 4 }}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Analysis Results
            </Typography>
            <Card>
              <CardContent>
                <Typography variant="h6">Description:</Typography>
                {analysisResult.description.captions.map((caption, index) => (
                  <Typography key={index}>
                    {caption.text} (Confidence: {(caption.confidence * 100).toFixed(2)}%)
                  </Typography>
                ))}
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  Tags:
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {analysisResult.tags.map((tag, index) => (
                      <Chip
                        key={index}
                        label={`${tag.name} (${(tag.confidence * 100).toFixed(2)}%)`}
                        color="primary"
                        sx={{
                          fontSize: '0.9rem',
                          backgroundColor: tag.confidence > 0.7 ? 'green' : tag.confidence > 0.4 ? 'orange' : 'red',
                          color: 'white'
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  Metadata:
                </Typography>
                <Grid direction="row" container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography>Width: {analysisResult.metadata.width}px</Typography>
                    <Typography>Height: {analysisResult.metadata.height}px</Typography>
                    <Typography>Format: {analysisResult.metadata.format}</Typography>
                  </Grid>
                  <Grid item xs={12} md={6} textAlign="center" sx={{ marginTop: -5, marginLeft: 0 }}>
                    {prevImagePreview && (
                      <Box mt={2}>
                        <Image src={prevImagePreview} alt="Preview" width="100" height="100" />
                      </Box>
                    )}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
}

function handleImageChange(setFieldValue: (field: string, value: any) => void) {
  return {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      const acceptedFiles = event.target.files as FileList || [];
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setFieldValue('image', file);
      }
    }
  };
}
