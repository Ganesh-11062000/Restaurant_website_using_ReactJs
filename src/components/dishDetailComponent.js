import React,{Component} from 'react';
import {Card,CardBody,CardText,CardImg,CardTitle, Breadcrumb, BreadcrumbItem,} from 'reactstrap';
import {Link} from 'react-router-dom';

class DishDetail extends Component{

    renderDish(dish){
        return(
            <Card>
                <CardImg src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments){ 
        return(
          <div>
              {comments.map((comment) => {

                return <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year: 'numeric',month: 'short',day: '2-digit'}).format(new Date(comment.date))}</p>
            </div>;
              })}
          </div>
        );
    }

    render(){
        if(this.props.dish != null){
            return(
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/menu">Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                        {this.renderComments(this.props.comments)}
                        </ul>
                    </div>
                </div>
            );
        } else{
            return <div></div>;
        }
    }
}

export default DishDetail;