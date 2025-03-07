import { InsertUser, User, Feedback, InsertFeedback, users, feedback } from "@shared/schema";
import session from "express-session";
import connectPg from "connect-pg-simple";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getFeedback(id: number): Promise<Feedback | undefined>;
  getFeedbackByUser(userId: number): Promise<Feedback[]>;
  getAllFeedback(): Promise<Feedback[]>;
  createFeedback(feedback: InsertFeedback & { userId: number, sentimentRating: number, sentimentConfidence: string }): Promise<Feedback>;
  sessionStore: session.Store;
}
