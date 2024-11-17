"use server";

import { UserData } from "@/app/register/page";

export const registerUser = async (data: UserData) => {
  const res = await fetch(`${process.env.BASE_API}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userData = await res.json();
  return userData;
};
