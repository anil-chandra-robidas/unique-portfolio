import React, { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";
import PortfolioData from "./PortfolioData";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState(PortfolioData);
 

  const filterItem = (catItem) => {

    const updateItem = PortfolioData.filter((currentElem) => {
      return currentElem.categoryName === catItem;
    })

    setPortfolio(updateItem);

  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="portfolio" id="portfolio">
      <h3 data-aos="fade-right" className="section-title">My Portfolio</h3>
      <div className="tabs-wrapper">

        <div className="tab-links">
                <button className="tab-btn" onClick={() => setPortfolio(PortfolioData)}>
                 All Categories
                </button>
                <button className="tab-btn" onClick={() => filterItem('wordpress')}>
                 WordPress
                </button>
                <button className="tab-btn" onClick={() => filterItem('php')}>
                 PHP
                </button>
                <button className="tab-btn" onClick={() => filterItem('javascript')}>
                 Javascript
                </button>
                <button className="tab-btn" onClick={() => filterItem('react')}>
                 React
                </button>
                <button className="tab-btn" onClick={() => filterItem('bootstrap')}>
                 Bootstrap
                </button>
                <button className="tab-btn" onClick={() => filterItem('html')}>
                 HTML
                </button>
                <button className="tab-btn" onClick={() => filterItem('elementor')}>
                 Elementor
                </button>
        </div>

        <div className="tabs-content">
          <div className="tab-pane">
            {portfolio.map((elem) => {
              const { id, categoryName, imgageThumb, projectName, projectLanguage, projectPath } = elem;

              return (
                <div data-aos="fade-up" className="pane-item" key={id}>
                  <div className="pane-thumb">
                    <img src={imgageThumb} alt={categoryName} />
                  </div>
                  <div className="pane-des">
                    <h3>{projectName}</h3>
                    <p>{projectLanguage}</p>
                  </div>
                  <div className="pane-link">
                    <a target="_blank" rel="noopener noreferrer" href={projectPath}>
                      <FaLink />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
