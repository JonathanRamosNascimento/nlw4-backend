import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveyesRepository } from "../repositories/SurveysRepository";

class SurveysController {
  async create(request: Request, response: Response) {
    const {title, description} = request.body;

    const surveysRepository = getCustomRepository(SurveyesRepository);

    const survey = surveysRepository.create({
      title,
      description
    });

    await surveysRepository.save(survey);

    return response.status(201).json(survey);
  }

  async show(request: Request, response: Response) {
    const surveysRepository = getCustomRepository(SurveyesRepository);

    const all = await surveysRepository.find();

    return response.json(all);
  }
}

export { SurveysController };
