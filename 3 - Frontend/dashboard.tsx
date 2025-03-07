import { useAuth } from "@/hooks/use-auth";
import FeedbackList from "@/components/feedback-list";
import FeedbackStats from "@/components/feedback-stats";

export default function DashboardPage() {
  const { logoutMutation } = useAuth();

  return (
    // ... dashboard layout and components
  );
}
