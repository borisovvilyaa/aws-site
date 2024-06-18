import axios from "axios";
import config from "@/conf.json";

// URL API из конфигурационного файла
const API_URL = config.API_HOST;

// Интерфейсы для типизации данных
interface SignInResponse {
  token: string;
}

interface ProfileResponse {
  email: string;
  nickname: string;
  registrationTime: string;
  lastSignInTime: string;
  photoURL?: string;
  baseBalance: number;
  totalGameTime: number;
  donateBalance: number;
  role: string;
  kills: number;
  death: number;
  friends: string[];
}

interface ErrorResponse {
  message: string;
}

// Функция для входа пользователя
export const signIn = async (
  email: string,
  password: string
): Promise<SignInResponse> => {
  try {
    const response = await axios.post<SignInResponse>(`${API_URL}/signin`, {
      email,
      password,
    });
    const token = response.data.token;
    localStorage.setItem("token", token);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      const errorResponse = error.response.data as ErrorResponse;
      throw new Error(errorResponse.message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

// Функция для получения данных профиля
export const getProfileData = async (): Promise<ProfileResponse> => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get<ProfileResponse>(
      `${API_URL}/profile-data`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      const errorResponse = error.response.data as ErrorResponse;
      throw new Error(errorResponse.message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

// Функция для выхода пользователя
export const signOut = async (): Promise<void> => {
  try {
    const token = localStorage.getItem("token");
    await axios.post(
      `${API_URL}/signout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    localStorage.removeItem("token");
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      const errorResponse = error.response.data as ErrorResponse;
      throw new Error(errorResponse.message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};
