const ML = {
  additionalModels: [
    {
      content: [
        'Lead quality scoring better understand the quality of the leads as measured by those that convert to Fidelity product(s) purchased by assigning individual lead scores.',
      ],
      title: 'Lead quality scoring',
    },
    {
      content: [
        'Lead gap assessor data attributes currently not captured at the time leads are received that Fidelity may want to capture at lead generation time.',
      ],
      title: 'Lead gap assessor',
    },
    {
      content: [
        'Lead source scoring now from whom (e.g. what vendors) the greatest population of valued leads are provided, and from whom quality has deteriorated.',
      ],
      title: 'Lead source scoring',
    },
    {
      content: [
        'Purchase predictor insight into product and lead alignment appropriately direct and increase likelihood of purchase and offer better product fit.',
      ],
      title: 'Purchase predictor',
    },
    {
      content: [
        'Application level fraud identifying patterns in applicants with a propensity to be fraudulent.',
      ],
      title: 'Application level fraud',
    },
    {
      content: [
        'Distribution fraud review policies and their distribution source to identify institutional fraud.',
      ],
      title: 'Distribution fraud',
    },
    {
      content: [
        'Employee level fraud identify patterns of claims payments and disbursements for operational manipulation of the disbursement process.',
      ],
      title: 'Employee level fraud',
    },
  ],
  diff: [
    {
      content: [
        'Single opinionated framework that allows data scientists to productionalize a model from feature engineering to predictions.',
        'Pre-built steps framework allows users to get started immediately with minimal coding.',
        'Standardized structure offered by the steps framework combined with CI/CD pipeline allows data scientists to set up a new pipeline easily.',
      ],
      title: 'Setup',
    },
    {
      content: [
        'Focuses on visibility and traceability with data through features like self describing datasets, lineage tracking, reusable transformations and integrations.',
        'Provides reusable workflows utilizing the pipeline StateMachine to offer a standardized way to model client/domain specific rules.',
        'Enables data scientists to work on both feature engineering and model training, avoiding the need to hand-off to Data Engineering and Devops teams.',
        'Provides a structured way to model and document assumptions to increase cross-functional transparency.',
      ],
      title: 'Implement',
    },
    {
      content: [
        'Allows data scientists and business analysts to experiment without dependency on the engineering team.',
        'Provides a single observability platform.',
        'Easy debugging of training and prediction issues by connecting the dots between datasets, pipelines and model versions from ingestion through training and prediction.',
        'Designed to operate and maintain on multiple models in production with different datasets.',
      ],
      title: 'Operate',
    },
  ],
};

export default ML;
