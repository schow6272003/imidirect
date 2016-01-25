require 'securerandom' #set random 
include ParamsHelper # parameters helper
include CasesHelper

module Api 
  class CasesController < ApplicationController
    def index
     @result = params[:passedparams]
      render json: @result
    end

    def new

    end

    def populate
      @current_case_id = params[:id]
      @current_case = Case.find_by_case_id(@current_case_id)
      @user_id = @current_case.user_id
      populate_database(@current_case_id, @user_id)
    end

    def option
      @case_id = params[:case_id]
      @options = JSON.parse(params[:options])
      options_settings(@case_id, @options)
    end

    def destroy
      
    end
 
private
    # strong parameters to populate 
    def general_information_params
      g_params("general")
    end

    def i130_params
      g_params("i130")
    end

    def i765_params
       g_params("i765")
    end

    def i485_params
       g_params("i485")                                    
    end

  end
end