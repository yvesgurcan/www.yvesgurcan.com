---
layout: resume
window_title: resume
---
# Yves Gurcan
{% for experience in site.data.resume %}
{% include resume_experience.html
    id=experience.id
    job_title=experience.job_title
    company=experience.company
    dates=experience.dates
    location=experience.location
    status=experience.status
    technologies=experience.technologies
    applications=experience.applications
    details=experience.details
%}
{% endfor %}