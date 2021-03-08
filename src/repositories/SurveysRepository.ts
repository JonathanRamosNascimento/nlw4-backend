import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../models/Survey";

@EntityRepository(Survey)
class SurveyesRepository extends Repository<Survey> {}

export { SurveyesRepository };

