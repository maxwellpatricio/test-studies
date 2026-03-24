type CourseDomain = {
    name: string;
}

type CourseApi = {
    course:{
        name: string;
    }
}
export class CourseMapper {
    static toDomain(CourseApi: CourseApi): CourseDomain{
        return {
            name: CourseApi.course.name,
        }
    }

    static toApi(CourseDomain: CourseDomain): CourseApi {
        return {
            course:{
                name: CourseDomain.name,
            }
        }
    }
}