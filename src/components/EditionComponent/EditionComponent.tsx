import React, { useReducer } from 'react'import './EditionComponent.scss'import { FC } from 'react'import { EditionCover } from "./EditionCover/EditionCover";import { EditionContent } from "./EditionContent/EditionContent";import { EditionBonus } from "./EditionBonus/EditionBonus";import { Navigation } from "../Navigation/Navigation";import { initialState, reducer } from "../../reducer/reducer";export const EditionComponent:FC = ({}) => {    const [state, dispatch] = useReducer(reducer, initialState);    return (        <div className="editionComponent">            <Navigation                className="editionComponent-navigation"                dispatch={dispatch}            />            <div className="editionComponent-container">                <EditionCover                    image={state.image}                />                <div>                <EditionContent                    title={state.title}                    price={state.price}                    text={state.text}                    text_2={state.text_2}                />                <EditionBonus                    state={state}                />                </div>            </div>        </div>    )};