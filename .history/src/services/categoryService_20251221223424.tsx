import { apiRequest } from "../api/apiRequest";
import { Category } from "../types";

export const fetchCategories = async (): Promise<Category[]> => {
    try {   
        