export const GET_TASKS = `
{
  getTasks {
    id
    title
    description
    status
  }
}`;

export const CREATE_TASK = `
mutation CreateTask(
  $title: String,
  $description: String
) {
    createTask(title: $title, description: $description)
}`;

export const UPDATE_STATUS_TASK = `
mutation UpdateStatusTask(
  $id: ID,
  $status: String
) {
    updateStatusTask(id: $id, status: $status)
}`;
