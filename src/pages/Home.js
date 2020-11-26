import React from 'react';
import MainBanner from '../component/Web/MainBanner';
import HomeCourses from '../component/Web/HomeCourses';
import HomeMyCoursesWork from '../component/Web/HomeMyCoursesWork';
import ReviewCourses from '../component/Web/ReviewCourses';

export default function Home() {
    return (
        <>
            <MainBanner/>
            <HomeCourses />
            <HomeMyCoursesWork />
            <ReviewCourses />
        </>
    );
}