class Api::CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :set_product
  #Note: add relationship in before_action!!!!!!!!

  def index
    render json: @product.comments
  end

  def all
    render json: Comment.all
  end

  def show
  end

  def create
    comment = @product.comments.new(comment_params)
    if (comment.save)
      render json: comment
    else
      render json: comment.errors, status: 422
    end
  end

  def update
    if (@comment.update(comment_params))
      render json: @comment
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy
  comment = @comment.destroy
  render json: comment
  end

  private

  def comment_params
    params.require(:comment).permit(:text)
  end

  def set_product
    @product = Product.find(params[:product_id])
  end

  def set_comment
    @comment = @product.comment.find(params[:id])
  end

end
