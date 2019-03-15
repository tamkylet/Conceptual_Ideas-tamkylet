class CoursesController < ApplicationController
	def show
        categories = ["Comp", "Engl", "Fine", "Geog", "Hist", "Math", "Psyc", "Soci"]

		if categories.include? params[:filter].capitalize
            @courses = Course.where(course_type: params[:filter].capitalize).paginate(page: params[:page], per_page: 15)
            @type = params[:filter].capitalize
        else
            @courses = Course.paginate(page: params[:page], per_page: 15)
            @type = "All"
    	end
  	end
end
