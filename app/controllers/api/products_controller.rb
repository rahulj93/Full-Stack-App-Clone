class Api::ProductsController < ApplicationController 
	def create 
		# debugger 
		@product = Product.new(product_params)
		if @product.save
			render 'api/products/show'
		else
			render json: @product.errors.full_messages, status: 422
		end 
  end 
  
  def index
    @products = Product.all 
    render :index
  end 

  def show
		@product = Product.find(params[:id])
		if @product 
			render 'api/products/show'
		else
			render json: @product.errors.full_messages, status: 422
		end 
  end

	private 

	def product_params
		params.require(:product).permit(:title, :description, :price, :seller_id, :customer_id, :photo)
	end 

end 
