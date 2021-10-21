import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const TableWrapper = styled.tr`
    .date{
        @media(min-width:768px){
            font-size:11px;
            width:max-content;
        }
        @media(min-width:992px){
            font-size:15px;
            
        }
    }
    a{
        height:30px;
        background:${props => props.theme.color.green};
        border-radius:26px;
        color:#ffffff;
        display: flex;;
        font-size:15px;
        align-items:center;
        justify-content:center;
        text-decoration:none;
        margin:auto;
        width:70px;
    }
`;

function OrderTable({order, date, statusName, total, link}) {
    return (
        <TableWrapper>
             <td>#{order}</td>
             <td className="date">{date}</td>
             <td>{statusName}</td>
             <td>{total}</td>
             <td><Link to={link}>View</Link></td>
        </TableWrapper>
    )
}

export default OrderTable
