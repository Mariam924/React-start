import React, { Component } from 'react'
import p from "./Portfolio.module.css";
export default class Portfolio extends Component {
  render() {
    return (
        <section className="page-section portfolio" id="portfolio">
        <div className="container">
            <h2 className="section-heading text-center text-uppercase text_secondary mb-0">Portfolio</h2>
            <div className="divider-custom">
                <div className="divider-line"></div>
                <div className="divider-custom-icon">
                    <svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></div>
                <div className="divider-line"></div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className={`${p.portfolio_item} mx-auto `} data-toggle="modal" data-target="#portfolioModal1">
                        <div className={`${p.portfolio_item_caption} d-flex align-items-center justify-content-center h-100 w-100`}>
                            <div className={`${p.portfolio_item_caption_content} text-center text-white`}e><svg className="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></div>
                        </div>
                        <img className="img-fluid" src="cabin.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className={`${p.portfolio_item} mx-auto`} data-toggle="modal" data-target="#portfolioModal2">
                        <div className={`${p.portfolio_item_caption} d-flex align-items-center justify-content-center h-100 w-100`}>
                            <div className={`${p.portfolio_item_caption_content} text-center text-white`}><svg className="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></div>
                        </div>
                        <img className="img-fluid" src="cake.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className={`${p.portfolio_item} mx-auto`} data-toggle="modal" data-target="#portfolioModal3">
                        <div className={`${p.portfolio_item_caption} d-flex align-items-center justify-content-center h-100 w-100`}>
                            <div className={`${p.portfolio_item_caption_content} text-center text-white`}><svg className="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></div>
                        </div>
                        <img className="img-fluid" src="circus.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                    <div className={`${p.portfolio_item} mx-auto`} data-toggle="modal" data-target="#portfolioModal4">
                        <div className={`${p.portfolio_item_caption} d-flex align-items-center justify-content-center h-100 w-100`}>
                            <div className={`${p.portfolio_item_caption_content} text-center text-white`}><svg className="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></div>
                        </div>
                        <img className="img-fluid" src="game.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                    <div className={`${p.portfolio_item} mx-auto`} data-toggle="modal" data-target="#portfolioModal5">
                        <div className={`${p.portfolio_item_caption} d-flex align-items-center justify-content-center h-100 w-100`}>
                            <div className={`${p.portfolio_item_caption_content} text-center text-white`}><svg className="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></div>
                        </div>
                        <img className="img-fluid" src="safe.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className={`${p.portfolio_item} mx-auto`} data-toggle="modal" data-target="#portfolioModal6">
                        <div className={`${p.portfolio_item_caption} d-flex align-items-center justify-content-center h-100 w-100`}>
                            <div className={`${p.portfolio_item_caption_content} text-center text-white`}><svg className="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></div>
                        </div>
                        <img className="img-fluid" src="submarine.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
