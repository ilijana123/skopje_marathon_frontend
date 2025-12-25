import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField, Typography, Box, Stack, Rating
} from '@mui/material';
import { CommentFormData } from '../types';

interface CommentDialogProps {
  open: boolean;
  comment: CommentFormData;
  onCommentChange: (comment: CommentFormData) => void;
  onClose: () => void;
  onSubmit: () => void;
}

export const CommentDialog = ({
  open,
  comment,
  onCommentChange,
  onClose,
  onSubmit
}: CommentDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Остави коментар</DialogTitle>
      <DialogContent>
        <Stack spacing={3} sx={{ mt: 1 }}>
          <Box>
            <Typography variant="body2" mb={1}>Оцена</Typography>
            <Rating
              value={comment.rating}
              onChange={(e, value) => onCommentChange({ ...comment, rating: value || 5 })}
              size="large"
            />
          </Box>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Коментар"
            value={comment.text}
            onChange={(e) => onCommentChange({ ...comment, text: e.target.value })}
            placeholder="Напишете ваше мислење..."
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Откажи</Button>
        <Button onClick={onSubmit} variant="contained" color="primary">
          Објави
        </Button>
      </DialogActions>
    </Dialog>
  );
};