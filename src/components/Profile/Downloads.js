import React from 'react';
import styled from 'styled-components';
import DownloadsCard from '../../styled/DownloadsCard';
import {connect} from 'react-redux'

const DownloadsWrapper = styled.div`
padding:5%;
flex:1;
@media(min-width:768px){
            padding:0;
            margin-right:5%;
            display: flex;
            justify-content: space-between;
            flex-wrap:wrap;
        }
    .nothing{
        border-radius:26px;
        padding:5%;
        border:1px solid #474747;
        @media(min-width:768px){
            display:flex;
            justify-content:space-between;
            padding:20px;
        }
        button{
            background:${props => props.theme.color.green};
            color:#ffffff;
            border:none;
            border-radius:26px;
            height:40px;
            padding:0 20px;
        }
    }
`;

const mapStateToProps = state => ({
    dark: state.theme.dark
  });

function Downloads({dark}) {
    const downloadList = [
        {
            title:"Name of product",
            image:""
        },
        {
            title:"Name of product",
            image:""
        },
        {
            title:"Name of product",
            image:""
        },
        {
            title:"Name of product",
            image:""
        }
    ]
    return (
        <DownloadsWrapper className={dark ? 'dark' : 'light'}>
           {/* <div className="nothing">
               <p>No downloads available</p>
               <button>Browse Products</button>
           </div> */}
           {downloadList.map((item, i) => {
               return <DownloadsCard title={item.title} key={i} image={item.image}/>
           })}
        </DownloadsWrapper>
    )
}

export default connect(mapStateToProps)(Downloads)
