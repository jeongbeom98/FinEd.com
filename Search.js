import React, { useState } from 'react';
import './App.css';

const terms = [
  {
    id: 1,
    title: "Employed",
    description:
      "This category includes those who at the time of the survey worked as paid employees, worked in their own business, or worked as unpaid workers in a family member’s business. It also includes those who were not working but who had jobs from which they were temporarily absent due to, for example, vacation, illness, or bad weather.",
    // link for more info on employment definition,
    url: "https://www.bls.gov/cps/cps_htgm.htm#employed",
  },
  {
    id: 2,
    title: "Unemployed",
    description:
      "This category includes those who were not employed, were available for work, and had tried to find employment during the previous four weeks. It also includes those waiting to be recalled after a temporary layoff.",
    // link for more info on unemployment definition,
    url: "https://www.bls.gov/cps/cps_htgm.htm#unemployed",
  },
  {
    id: 3,
    title: "Not in the labor force",
    description:
      "This category includes those who fit neither of the first two categories, such as a full-time student, homemaker, or retiree.",
    // link for more info on not in the labor force definition,
    url: "https://www.bls.gov/cps/cps_htgm.htm#nilf",
  },
  {
    title: "Natural rate of unemployment",
    description:
      "A long-run rate of unemployment around which short-run unemployment rates fluctuates",
    // link for more info on natural rate of unemployment definition,
    url: "https://www.investopedia.com/terms/n/natural-rate-of-unemployment.asp",
  },
  {
    id: 4,
    title: "Cyclical rate of unemployment",
    description:
      "Corresponds to deviations of unemployment from the natural rate",
    // link for more info on cyclical rate of unemployment definition,
    url: "https://www.investopedia.com/terms/c/cyclicalunemployment.asp",
  },
  {
    id: 5,
    title: "Frictional unemployment",
    description:
      "Corresponds to the period necessary for individuals to searching for jobs, which are best suit to their tastes and skills, and for which there will be job market matching",
    // link for more info on frictional unemployment definition,
    url: "https://www.investopedia.com/terms/f/frictionalunemployment.asp",
  },
  {
    id: 6,
    title: "Structual unemployment",
    description:
      "Arises because the number of jobs available in certain labor markets is insufficient to provide a job for everyone searching for a job. This form of unemployment can be of particular concern since it corresponds to individuals who are subject to potentially long spells of unemployment",
    // link for more info on structural unemployment definition,
    url: "https://www.investopedia.com/terms/s/structuralunemployment.asp",
  },
  {
    id: 7,
    title: "Efficiency Wage",
    description:
      "Wages that are higher than initial reservation wage, aimed at maintaining worker loyalty and reducing turnover, in order to maintain overall quality of workers within a company and avoid the loss of valuable human capital within the corporation. It has to be higher than other firms.",
    // link for more info on efficiency wage definition,
    url: "https://www.investopedia.com/terms/e/efficiency-wage.asp",
  },
  {
    id: 8,
    title: "Externality",
    description:
      "An externality is a cost or benefit caused by a producer that is not financially incurred or received by that producer. An externality can be both positive or negative and can stem from either the production or consumption of a good or service.",
    // link for more info on externality definition,
    url: "https://www.investopedia.com/terms/e/externality.asp",
  },
  {
    id: 9,
    title: "Spillover effect",
    description:
      "Spillover effect refers to the impact that seemingly unrelated events in one nation can have on the economies of other nations.",
    // link for more info on spillover effect definition,
    url: "https://www.investopedia.com/terms/s/spillovereffect.asp",
  },
  {
    id: 10,
    title: "Reservation wages",
    description:
      "Reservation wages invoke the idea that individuals have different threshold levels for wage which they consider to be high for them to agree to being hiring.",
    // link for more info on reservation wages definition,
    url: "https://www.investopedia.com/terms/r/reservation-wage.asp",
  },
  {
    id: 11,
    title: "Menu Cost",
    description: "Transaction costs linked to changing prices",
    // link for more info on menu cost definition,
    url: "https://www.investopedia.com/terms/m/menu-costs.asp",
  },
  {
    id: 12,
    title: "Moore's Law",
    description:
      "Roughly every two years, the number of transistors on microchips will double. Therefore, computational progress will become significantly faster, smaller, and more efficient over time.",
    // link for more info on Moore's Law definition,
    url: "https://www.investopedia.com/terms/m/mooreslaw.asp",
  },
  {
    id: 13,
    title: "Moral hazard",
    description:
      "Moral hazard is a situation in which one party gets involved in a risky event knowing that it is protected against the risk and the other party will incur the cost. It arises when both the parties have incomplete information about each other.",
    // link for more info on moral hazard definition,
    url: "https://www.investopedia.com/terms/m/moralhazard.asp",
  },
  {
    id: 14,
    title: "Rachet effect",
    description:
      "A rachet effect is an instance of the restrained ability of human process to be reserve once a specific thing has happened.",
    // link for more info on rachet effect definition,
    url: "https://www.investopedia.com/terms/r/ratchet-effect.asp",
  },
  {
    id: 15,
    title: "Money",
    description:
      "The set of assets that are widely used and accept as payment, such as currency and checking accounts",
    // link for more info on money definition,
    url: "https://www.investopedia.com/terms/m/money.asp",
  },
  {
    id: 16,
    title: "Currency",
    description: "Paper money and coin issued by the government; cash",
    // link for more info on currency definition,
    url: "https://www.investopedia.com/terms/c/currency.asp",
  },
  {
    id: 17,
    title: "Money supply",
    description: "Quantity of money available in the economy",
    // link for more info on money supply definition,
    url: "https://www.investopedia.com/terms/m/moneysupply.asp",
  },
  {
    id: 18,
    title: "Dynamics",
    description:
      "Trace and study the behavior of variables through 'time', and determine whether these variables tend to mobe towards equilibrium",
    // link for more info on dynamics definition,
    url: "https://www.investopedia.com/terms/m/market-dynamics.asp",
  },
  {
    id: 19,
    title: "Partial equilibrium",
    description:
      "Condition of economic equilibrium which analyzes only a sinle market, cetris peribus except for the one change at the time being analyzed.",
    // link for more info on partial equilibrium definition,
    url: "https://www.investopedia.com/terms/p/partial-equilibrium.asp",
  },
  {
    id: 20,
    title: "General equilibrium",
    description:
      "The price and quantities of all markets in the economy are considered simultaneously, including feedback effects from one another.",
    // link for more info on general equilibrium definition,
    url: "https://www.investopedia.com/terms/g/generalequilibrium.asp",
  },
  {
    id: 21,
    title: "Ceteris Paribus assumption",
    description:
      "This is a very commonly used expression to highlight the difference between movements along demand and supply curves (“changes in quantities demanded or supplied”) and shifts in those curves, which arise because of “holding other variables (factors) constant”",
    // link for more info on ceteris paribus assumption definition,
    url: "https://www.investopedia.com/terms/c/ceterisparibus.asp",
  },
  {
    id: 22,
    title: "Black Swan",
    description:
      "Rare events, hence 'outliers', which are largely not anticipated, but can have subsequent impacts, thereby generating major economic structual changes in behavior and the structure of economies.",
    // link for more info on black swan definition,
    url: "https://www.investopedia.com/terms/b/blackswan.asp",
  },
];

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

    const results = terms.filter(term =>
      term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input className="searchbar" type="search" value={searchTerm} onChange={handleSearch}/>
      <button className="btn btn-outline-primary" onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            <h3><a href={result.url} target="_blank" rel="noopener noreferrer">{result.title}</a></h3>
            <p>{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default Search;
