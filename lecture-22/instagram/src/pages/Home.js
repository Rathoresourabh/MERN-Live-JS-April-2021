import { Box } from "@material-ui/core";
import PostCard from "../components/PostCard";


export default function Home() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </Box>
  );
}
