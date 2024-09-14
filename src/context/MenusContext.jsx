'use client'
import React, { createContext, useContext, useState } from 'react';


const MenuContext = createContext();

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu debe ser utilizado dentro del MenuProvider");
    }
    return context;
};

export const MenuProvider = ({ children }) => {
    const [viewSrc, setViewSrc] = useState(false)
    const [viewPortfolioFolder, setViewPortfolioFolder] = useState(false)

    const toggleViewFolder = () => {
        if (viewSrc) {
            setViewSrc(false)
        }
        setViewPortfolioFolder(!viewPortfolioFolder)
    }

    const [viewFile, setViewFile] = useState(false);
    const [viewEdit , setViewEdit ] = useState(false);
    const [viewSelection , setViewSelection ] = useState(false);
    const [viewView , setViewView ] = useState(false);
    const [viewGo , setViewGo] =  useState(false);
    const [ viewRun , setViewRun] = useState( false )
    

    const toggleViewFile = () => {
        setViewFile(!viewFile)
        setViewEdit(false)
        setViewSelection(false)
        setViewView(false)     
        setViewGo(false)   
        setViewRun(false)
    }

    const toggleEditFile = () => {
        setViewEdit(!viewEdit)
        setViewFile(false)
        setViewSelection(false)
        setViewView(false)  
        setViewGo(false)   
        setViewRun(false)
    }

    const toggleSelection = () => {
        setViewSelection(!viewSelection)
        setViewFile(false)
        setViewEdit(false)
        setViewView(false)  
        setViewGo(false)   
        setViewRun(false)
    }

    const toggleView = () => {
        setViewView(!viewView)
        setViewFile(false)
        setViewEdit(false)
        setViewSelection(false)
        setViewGo(false)   
        setViewRun(false)
    }

    const toggleGo = () =>{
        setViewGo(!viewGo)
        setViewFile(false)
        setViewEdit(false)
        setViewSelection(false)
        setViewView(false)  
        setViewRun(false)
    }

    const toggleRun = () =>{
        setViewRun(!viewRun)
        setViewFile(false)
        setViewEdit(false)
        setViewSelection(false)
        setViewView(false)  
        setViewGo(false)   
    }

    const closeMenus = () =>{
        if( viewFile || viewEdit || viewSelection || viewView || viewGo || viewRun) {
            setViewRun(false)
            setViewFile(false)
            setViewEdit(false)
            setViewSelection(false)
            setViewView(false)  
            setViewGo(false)  
        }          
    }



    return (
        <MenuContext.Provider value={{ 
            viewSrc, toggleViewFolder ,viewPortfolioFolder, setViewSrc , setViewPortfolioFolder ,
            closeMenus ,toggleViewFile ,viewFile ,toggleEditFile ,viewEdit ,toggleSelection ,viewSelection ,toggleSelection ,toggleView ,toggleSelection , viewView ,toggleGo ,viewGo , toggleRun , viewRun   
            
            }}>
            {children}
        </MenuContext.Provider>
    );
};