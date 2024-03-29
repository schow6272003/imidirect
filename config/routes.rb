Rails.application.routes.draw do
  

   root 'home#index'

    namespace :api do
      resources :cases do
        resources :charges
      end
      resources :ids
      resources :statuses
    end

    resources :users do
      resources :apps, only: [:show]
    end
    
    get 'sessions/new'
    get 'signup' => 'users#new'
    get 'login' => 'sessions#new'
    post 'login' => 'sessions#create'
    get 'logout' => 'sessions#destroy'
    get  'ff_reroute/:user_id/:case_id/:app_id' => "users#reroute"
    post 'apis/populate/:id' => 'api/cases#populate'
    get 'apis/delete/:case_id' => 'api/cases#destroy', as: :delete_case
    get 'apis/option/:id' => 'api/cases#option'
    get 'apis/active_status/:id' => 'api/ids#active_status'
    get 'current_user' => 'users#show_current_user'
    get 'about' => 'home#about', as: :about 
    get 'category/:app_id' => 'home#category', as: :category

 
    # post 'forms/:id/new_case' => 'forms#new_case', as: :new_case 
    # get  'forms/:id/new_application_form' => 'forms#new_application_form', as: :new_application_form


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
