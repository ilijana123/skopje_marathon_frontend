import {
  Card, CardContent, CardActions, Grid, Button,
  Typography, Box, Paper, Rating
} from '@mui/material';
import { EmojiEvents } from '@mui/icons-material';
import { Race } from '../types';

interface RacesTabProps {
  races: Race[];
  onOpenCommentDialog: (raceId: number) => void;
}

export const RacesTab = ({ races, onOpenCommentDialog } :RacesTabProps) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom fontWeight="bold" mb={3}>
        Минати трки
      </Typography>
      
      <Grid container spacing={3}>
        {races.map(race => (
          <Grid key={race.id}>
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      {race.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {race.date}
                    </Typography>
                  </Box>
                  <Box textAlign="right">
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography variant="h5" color="primary" fontWeight="bold">
                        {race.rating?.toFixed(1)}
                      </Typography>
                      <EmojiEvents color="primary" />
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      {race.participants} учесници
                    </Typography>
                  </Box>
                </Box>

                {race.comments && race.comments.length > 0 && (
                  <Box mb={2}>
                    {race.comments.map(comment => (
                      <Paper key={comment.id} variant="outlined" sx={{ p: 2, mb: 1 }}>
                        <Box display="flex" justifyContent="space-between" mb={1}>
                          <Typography variant="subtitle2" fontWeight="bold">
                            {comment.user}
                          </Typography>
                          <Rating value={comment.rating} readOnly size="small" />
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {comment.text}
                        </Typography>
                        <Typography variant="caption" color="text.disabled" sx={{ mt: 1, display: 'block' }}>
                          {comment.date}
                        </Typography>
                      </Paper>
                    ))}
                  </Box>
                )}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => onOpenCommentDialog(race.id)}
                >
                  Остави коментар
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};