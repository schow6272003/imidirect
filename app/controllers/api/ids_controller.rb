module Api
  class IdsController < ApplicationController

    def index
    end

    def show
    end

    def new

    end
    
    def create
      @case = Case.new(case_params)      
      if @case.save 
        @status = Status.create(filling: true, payment: false, complete: false, case_id: @case.id)
        render 'create'
      else
        redirect_to "http://yahoo.com"
      end

    end

  private
    def case_params
      params.require(:case).permit(:case_id, :application_id, :user_id)
    end
  end
end