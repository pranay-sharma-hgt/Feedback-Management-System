```typescript
import { useAuth } from "@/hooks/use-auth";
import { useForm } from "react-hook-form";
import { insertUserSchema, type InsertUser } from "@shared/schema";
import { useLocation } from "wouter";

export default function AuthPage() {
  const { user, loginMutation, registerMutation } = useAuth();
  const [_, setLocation] = useLocation();

  // ... authentication form logic and rendering
}
```