import { Request, Response } from "express";

import { filterWeatherByLetter } from "../services/weather.service";

export const filterWeather = async (req: Request, res: Response) => {
  const { letter } = req.query;

  // Validation
  if (!letter || letter.length !== 1 || !/^[aA-zZ]$/.test(letter.toString())) {
    return res
      .status(400)
      .json({ message: "A single letter parameter is required." });
  }

  const filteredResults = await filterWeatherByLetter(letter.toString());

  res.json(filteredResults);
};
