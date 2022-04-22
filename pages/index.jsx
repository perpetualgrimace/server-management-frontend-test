// import { useCallback, useEffect, useState } from 'react';
// import Button from '../components/Button';
// import ClickCount from '../components/ClickCount';
import GlobalHead from '/components/GlobalHead';
import GlobalNav from '/components/GlobalNav';
import GlobalHero from '/components/GlobalHero';

import ToolsSection from '/components/ToolsSection';
import ToolsItem from '/components/ToolsItem';

import OutboundIcon from '../components/icons/OutboundIcon';

function Home() {
  const title="Toolkit";

  return (
    <div className="home">
      <GlobalHead
        pageTitle={title}
        description="Data science toolkit"
      />

      <GlobalNav />

      <main className="main" id="#main">
        <GlobalHero
          pageTitle={title}
          imgSlug="tools"
        />

        <div className="tools-wrapper wrapper">
          <ToolsSection sectionTitle="Data science">
            <ToolsItem
              href="#"
              outbound={true}
              imgSrc="jupyterhub-logo"
              altText="Jupyter Hub"
            />
          </ToolsSection>

          <ToolsSection sectionTitle="Data analysis">
            <ToolsItem
              href="#"
              outbound={true}
              imgSrc="business-intelligence-icon"
              label="Business intelligence view"
              altText=""
            />
            <ToolsItem
              href="#"
              outbound={true}
              imgSrc="graph-view-icon"
              label="Graph view"
              altText=""
            />
          </ToolsSection>

          <ToolsSection sectionTitle={<>
            Browse & manage <span className="u-visually-hidden">data</span>
          </>}>
            <ToolsItem
              href="#"
              outbound={true}
              imgSrc="data-viewer-icon"
              label="Data viewer"
              altText=""
            />
            <ToolsItem
              href="#"
              outbound={true}
              imgSrc="prediction-engines-icon"
              label="Engines"
              altText=""
            />
          </ToolsSection>
        </div>
      </main>

      <div className="bg">
        <img className="bg-img" src="/bg.jpg" srcSet="/bg.jpg 1x, /bg@2x.jpg 2x" alt="" draggable="false" />
      </div>
      
    </div>
  )
}

export default Home;
