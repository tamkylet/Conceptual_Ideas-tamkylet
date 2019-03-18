import C from './courseListTypes.js';

export function allCourses(courses) {
  return {
    type: C.ALL_COURSES,
    courses: courses
  };
}

export function courseType(courseTypes) {
  return {
    type: C.COURSE_TYPE,
    courseTypes: courseTypes
  };
}

export function courseLevel(courseLevels) {
  return {
    type: C.COURSE_LEVEL,
    courseLevels: courseLevels
  };
}

export function sortCourses(sort) {
  return {
    type: C.SORT_COURSES,
    sort: sort
  };
}
