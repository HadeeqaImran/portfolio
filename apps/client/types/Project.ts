export default interface Project {
  _id: string; // Unique identifier for the project
  title: string; // The title of the project
  year: string; // The year the project was created or launched
  description: string; // A short description of the project
  image: string; // Path to an image associated with the project
  link: string; // URL to the project or application
  github: string; // URL to the GitHub repository for the project
  video: string; // Path to a demo video related to the project
  technologies: string[]; // List of technology IDs associated with the project
  createdAt: string; // Timestamp of when the project was created
  updatedAt: string; // Timestamp of the last update to the project
  titleImage: string;
  __v: number; // Internal version key (for MongoDB)
}
