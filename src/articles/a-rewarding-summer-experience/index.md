---
datePublished: 2020-08-05
dateModified: 2020-08-05
title: A Rewarding Summer Experience
author: xiangyu-wang
description: >-
  What I learned from my data science internship.
---

This summer, I got the chance to apply some of the data science knowledge I
gained in school to the real world while working as an intern at Spraoi. The
opportunity to take the skills I have acquired in the classroom into the
workforce and apply allows me to further explore data science, and I had a great
sense of accomplishment when I saw the model we built for our client put into
production to create real business values.

After coming to Carnegie Mellon University for my master’s degree, I have taken
various data science courses and worked on many data science projects both in a
team or individually. I felt I was sufficiently prepared for the internship. But
the reality is I was not. I had to continually learn and receive directions from
my mentor in order to best complete this exercise.

Here are the main takeaways from this internship:

First, it takes a massive amount of experiments to find the best possible path
in data science. One needs to stay creative, inquisitive, detail-oriented, and
most importantly, have a huge amount of patience as the combination of technical
elements from programming to tuning machine learning models can be highly
complex. In our project, the data, as it comes from the real-world, is messier
than I would have imagined. Not only do we have a limited amount of data, but
the data itself is also highly imbalanced. To tackle this problem, I had to
experiment with different sampling strategies: under-sampling, over-sampling,
and sampling with different ratios, to find the training dataset that best
allows the algorithm to learn enough to make the best predictions. We initially
had weak model performance, using Random Forest, Decision Trees, Logistic
Regression and other strategies, but the model performance was still lackluster.
After researching different modeling techniques, I found that CatBoost performs
exceptionally well when many categorical data columns exist. During the research
process, I became familiar with some state-of-the-art algorithms in the field of
data analytics which I never studied in class. Throughout the entire project
process, I learned firsthand that one must have a large amount of patience to
succeed in the data science field. In the journey of becoming a great data
scientist, failures are inevitable, so being able to adopt a positive attitude
to reframe problems multiple times is essential in searching for optimal
solutions.

Second, I learned in class that for a data science project to be successful,
data quality is of utmost importance and modeling performance boils down to
feature engineering. At Spraoi, I experienced this for real. We were frustrated
for some time because of stagnant model performance, so we had to go back to
review our data and it turned out that for inactive cases, the client had not
taken the time to provide us with the correct labels. After removing the
problematic data, we were left with fewer data points to put in our training
model, but because of the high-quality data we had in hand, the model
performance was boosted. In school, I worked mostly with structured datasets. In
the real world, however, data scientists typically have to analyze unstructured
data a lot to obtain a good amount of information. Once we engineered some
variables from the unstructured data, the model did an even better job.

Lastly, I came to realize that teamwork and communication are essential to the
development of an effective data science product. Working in a team can bring in
different perspectives and expertise. Increasing even a small percentage of
model performance usually means a large chunk of discussion. I held regular
meetings with my mentor so we could discuss and exchange our thoughts on the
model. I received valuable feedback, practical advice, and general data science
tips from him. Data scientists will meet bottlenecks all the time in everyday
work, being in a supportive team can make all the difference.
