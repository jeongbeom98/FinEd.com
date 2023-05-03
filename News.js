import React from "react";
import Navbar from "./Navbar";
import article from "./articlehome.png";
import article2 from "./article2.png";
import article3 from "./article3.png";
import article4 from "./article4.png";

function News() {
  return (
    <div className="container">
      <Navbar />
      <main role="main" class="container">
        <h1>News Page</h1>

        <div class="row">
          <div class="col">
            <div class="card w-175 p-6">
              <div class="card-body">
                {<img src={article2} class="img-fluid" alt="article" />}
                <h5 class="card-title">
                  Chicago Fed President Goolsbee says recent reports show
                  inflation is moving in the right direction
                </h5>
                <p class="card-text">
                  The latest batch of economic data shows positive developments
                  on the inflation front, but the Federal Reserve’s job is not
                  over yet, Chicago Federal Reserve President Austan Goolsbee
                  said.
                </p>
                <a
                  href="https://www.cnbc.com/2023/04/14/chicago-fed-president-goolsbee-says-recent-reports-show-inflation-is-moving-in-the-right-direction.html"
                  class="btn btn-primary"
                >
                  Continue Reading...
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card w-175 p-6">
              <div class="card-body">
                {<img src={article4} class="img-fluid" alt="artcle" />}
                <h5 class="card-title">
                  Dollar rebounds on higher expectations for Fed hike in May
                </h5>
                <p class="card-text">
                  The dollar bounced from a one-year low on Monday as resilience
                  in core U.S. retail sales, a rise in short-term inflation
                  expectations and impressive Wall Street bank earnings raised
                  market expectations for an interest rate hike in May.
                </p>
                <a
                  href="https://finance.yahoo.com/news/dollar-rebounds-higher-expectations-fed-012311745.html"
                  class="btn btn-primary"
                >
                  Continue Reading...
                </a>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div class="row">
          <div class="col">
            <div class="card w-175 p-6">
              <div class="card-body">
                {<img src={article3} class="img-fluid" alt="article" />}
                <h5 class="card-title">
                  What banking turmoil could mean for business and consumer
                  lending activity
                </h5>
                <p class="card-text">
                  The economy will take a hit as a result of recent banking
                  turmoil, minutes from the central bank show.
                </p>
                <a
                  href="https://finance.yahoo.com/news/what-banking-turmoil-could-mean-for-business-and-consumer-lending-activity-170421795.html"
                  class="btn btn-primary"
                >
                  Continue Reading...
                </a>
              </div>
            </div>
          </div>
          
          <div class="col">
            <div class="card w-175 p-6">
              <div class="card-body">
                {<img src={article} class="img-fluid" alt="artcle" />}
                <h5 class="card-title">
                  A 'mild' recession is now likely this year, Federal Reserve
                  says
                </h5>
                <p class="card-text">
                  The economy will take a hit as a result of recent banking
                  turmoil, minutes from the central bank show.
                </p>
                <a
                  href="https://www.nbcnews.com/business/economy/mild-recession-now-likely-year-federal-reserve-says-rcna79405"
                  class="btn btn-primary"
                >
                  Continue Reading...
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default News;
