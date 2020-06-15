import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Loading } from './loadingComponent';
import { baseUrl} from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item, isLoading, errMsg}){
    if(isLoading){
        return(
            <Loading/>
        );
    }
    else if(errMsg){
        return(
            <h4>{errMsg}</h4>
        );
    }
    else return(
        <FadeTransform 
            in 
            transformProps={{
                exitTransform:' scale(0.5) translateY(-50%)'
            }}
        >
            <Card>
                <CardImg src={baseUrl+item.image} alt={item.name}></CardImg>
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation? <CardSubtitle>{item.designation}</CardSubtitle>:null}
                    <CardText>{item.description}</CardText> 
                </CardBody>
            </Card>
        </FadeTransform>
    );
}

function Home(props){
    return(
        <div className="container">
            <div className="col-12">
                <h3>Home</h3><hr/>
            </div>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} 
                        isLoading={props.dishesLoading}
                        errMsg={props.errMsg}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}
                        isLoading={props.promoLoading}
                        errMsg={props.promoErrMsg}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}
                        isLoading={props.leaderLoading}
                        errMsg={props.leaderErrMsg}
                    />
                </div>
            </div>
        </div>
    );
}

export  default Home;