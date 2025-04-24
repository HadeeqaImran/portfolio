import client from '../base';

const API_BASE_URL = '/projects';

export const fetchProjects = () => client.get(API_BASE_URL);
export const fetchProjectById = (id) => client.get(API_BASE_URL + `/${id}`);
export const createProject = (payload) => client.post(API_BASE_URL, payload);
export const updateProject = (id, payload) => client.put(API_BASE_URL + `/${id}`, payload);
export const deleteProject = (id) => client.delete(API_BASE_URL + `/${id}`);