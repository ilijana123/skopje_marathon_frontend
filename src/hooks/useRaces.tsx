import { useState } from 'react';
import { Race, Comment, CommentFormData } from '../types';

const INITIAL_RACES: Race[] = [
  { 
    id: 1, 
    name: 'Скопје Маратон 2024', 
    date: '2024-05-15', 
    participants: 1250, 
    rating: 4.5, 
    comments: [] 
  },
  { 
    id: 2, 
    name: 'Скопје Полумаратон 2023', 
    date: '2023-10-20', 
    participants: 890, 
    rating: 4.7, 
    comments: [] 
  }
];

const INITIAL_COMMENT: CommentFormData = {
  rating: 5,
  text: ''
};

export const useRaces = () => {
  const [races, setRaces] = useState<Race[]>(INITIAL_RACES);
  const [commentDialog, setCommentDialog] = useState(false);
  const [selectedRaceId, setSelectedRaceId] = useState<number | null>(null);
  const [newComment, setNewComment] = useState<CommentFormData>(INITIAL_COMMENT);

  const openCommentDialog = (raceId: number) => {
    setSelectedRaceId(raceId);
    setCommentDialog(true);
  };

  const closeCommentDialog = () => {
    setCommentDialog(false);
    setSelectedRaceId(null);
    setNewComment(INITIAL_COMMENT);
  };

  const handleAddComment = () => {
    if (!newComment.text.trim() || !selectedRaceId) return;

    setRaces(races.map(race => {
      if (race.id === selectedRaceId) {
        const comment: Comment = {
          id: Date.now(),
          user: 'Корисник',
          rating: newComment.rating,
          text: newComment.text,
          date: new Date().toLocaleDateString('mk-MK')
        };
        const newComments = [...(race.comments || []), comment];
        return {
          ...race,
          comments: newComments,
          rating: newComments.reduce((acc, c) => acc + c.rating, 0) / newComments.length
        };
      }
      return race;
    }));

    closeCommentDialog();
  };

  return {
    races,
    commentDialog,
    selectedRaceId,
    newComment,
    setNewComment,
    openCommentDialog,
    closeCommentDialog,
    handleAddComment
  };
};