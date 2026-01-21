import { RacesTab } from "../components/RacesTab";
import { CommentDialog } from "../components/CommentDialog";
import { useRaces } from "../hooks/useRaces";

export const RacesContainer = () => {
  const r = useRaces();

  return (
    <>
      <RacesTab 
        races={r.races}
        onOpenCommentDialog={r.openCommentDialog}
      />

      <CommentDialog
        open={r.commentDialog}
        comment={r.newComment}
        onCommentChange={r.setNewComment}
        onClose={r.closeCommentDialog}
        onSubmit={r.handleAddComment}
      />
    </>
  );
};
