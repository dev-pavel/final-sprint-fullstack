CREATE TABLE vacancies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    jobType VARCHAR(20) NOT NULL CHECK (jobType IN ('Full-time', 'Part-time', 'Contract', 'Internship', 'Temporary')),
    company VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    minSalary INTEGER NOT NULL,
    maxSalary INTEGER NOT NULL,
    jobCategory VARCHAR(50) NOT NULL CHECK (jobCategory IN ('Technology', 'Healthcare', 'Finance', 'Marketing', 'Education'))
);

INSERT INTO vacancies (title, jobType, company, location, description, minSalary, maxSalary, jobCategory) VALUES
('Software Engineer', 'Full-time', 'TechCorp', 'New York, NY', 'Develop and maintain software applications.', 85000, 120000, 'Technology'),
('Registered Nurse', 'Full-time', 'HealthFirst', 'Los Angeles, CA', 'Provide patient care in various settings.', 70000, 95000, 'Healthcare'),
('Marketing Specialist', 'Full-time', 'MarketPros', 'Chicago, IL', 'Develop marketing strategies and campaigns.', 60000, 85000, 'Marketing'),
('Financial Analyst', 'Full-time', 'FinanceWorld', 'Boston, MA', 'Analyze financial data and prepare reports.', 75000, 100000, 'Finance'),
('Teacher', 'Full-time', 'LearnAcademy', 'Seattle, WA', 'Teach students in an academic setting.', 45000, 65000, 'Education'),
('Web Developer', 'Full-time', 'WebWorks', 'San Francisco, CA', 'Create and maintain websites.', 75000, 105000, 'Technology'),
('Pharmacist', 'Full-time', 'PharmaCare', 'Houston, TX', 'Dispense medications and advise patients.', 90000, 120000, 'Healthcare'),
('Sales Manager', 'Full-time', 'SalesPro', 'Phoenix, AZ', 'Manage sales teams and strategies.', 80000, 110000, 'Marketing'),
('Accountant', 'Full-time', 'FinanceCorp', 'Denver, CO', 'Manage financial records and prepare reports.', 70000, 95000, 'Finance'),
('High School Teacher', 'Full-time', 'EduSchool', 'Miami, FL', 'Teach high school students.', 45000, 65000, 'Education'),
('Data Scientist', 'Full-time', 'DataInsights', 'Austin, TX', 'Analyze and interpret complex data.', 95000, 135000, 'Technology'),
('Physical Therapist', 'Full-time', 'WellCare', 'Los Angeles, CA', 'Help patients recover physical functions.', 75000, 105000, 'Healthcare'),
('Social Media Manager', 'Full-time', 'MarketMasters', 'New York, NY', 'Manage social media campaigns and content.', 55000, 80000, 'Marketing'),
('Financial Planner', 'Full-time', 'WealthAdvisors', 'Chicago, IL', 'Create financial plans for clients.', 85000, 115000, 'Finance'),
('Elementary School Teacher', 'Full-time', 'PrimarySchool', 'San Francisco, CA', 'Teach elementary school students.', 45000, 65000, 'Education'),
('Network Administrator', 'Full-time', 'NetTech', 'Seattle, WA', 'Manage and maintain computer networks.', 75000, 105000, 'Technology'),
('Medical Assistant', 'Full-time', 'CareClinic', 'Houston, TX', 'Assist physicians with patient care.', 35000, 50000, 'Healthcare'),
('Digital Marketing Specialist', 'Full-time', 'AdPros', 'Phoenix, AZ', 'Develop and execute digital marketing strategies.', 60000, 85000, 'Marketing'),
('Investment Banker', 'Full-time', 'BankingPros', 'New York, NY', 'Provide investment banking services.', 120000, 150000, 'Finance'),
('College Professor', 'Full-time', 'UniTeach', 'Boston, MA', 'Teach courses at the college level.', 80000, 110000, 'Education'),
('Mobile App Developer', 'Full-time', 'AppBuilders', 'San Francisco, CA', 'Develop mobile applications for various platforms.', 90000, 125000, 'Technology'),
('Radiologic Technologist', 'Full-time', 'ImageCare', 'Chicago, IL', 'Perform imaging exams like X-rays and CT scans.', 60000, 85000, 'Healthcare'),
('Brand Manager', 'Full-time', 'BrandingExperts', 'Los Angeles, CA', 'Manage and develop a company’s brand strategy.', 80000, 110000, 'Marketing'),
('Credit Analyst', 'Full-time', 'FinanceCorp', 'Houston, TX', 'Evaluate the creditworthiness of clients.', 70000, 95000, 'Finance'),
('Middle School Teacher', 'Full-time', 'MiddleSchool', 'Denver, CO', 'Teach middle school students.', 45000, 65000, 'Education'),
('DevOps Engineer', 'Full-time', 'CloudServices', 'Austin, TX', 'Manage IT infrastructure and deployment pipelines.', 95000, 130000, 'Technology'),
('Registered Nurse (RN)', 'Full-time', 'MedCare', 'Miami, FL', 'Provide nursing care to patients.', 70000, 95000, 'Healthcare'),
('SEO Specialist', 'Full-time', 'SearchMasters', 'San Francisco, CA', 'Optimize websites for search engine rankings.', 55000, 80000, 'Marketing'),
('Financial Controller', 'Full-time', 'FinControl', 'New York, NY', 'Oversee financial operations and reporting.', 95000, 130000, 'Finance'),
('Special Education Teacher', 'Full-time', 'SpecEdSchool', 'Chicago, IL', 'Teach students with special needs.', 50000, 70000, 'Education'),
('Software Architect', 'Full-time', 'TechDesign', 'Boston, MA', 'Design software architecture and systems.', 110000, 150000, 'Technology'),
('Occupational Therapist', 'Full-time', 'TheraCare', 'Los Angeles, CA', 'Help patients recover daily living skills.', 75000, 105000, 'Healthcare'),
('Content Strategist', 'Full-time', 'ContentCreators', 'Houston, TX', 'Develop and manage content strategies.', 60000, 85000, 'Marketing'),
('Actuary', 'Full-time', 'RiskManagement', 'Phoenix, AZ', 'Analyze financial risks using mathematics and statistics.', 90000, 120000, 'Finance'),
('Science Teacher', 'Full-time', 'HighSchoolScience', 'Seattle, WA', 'Teach science subjects to high school students.', 50000, 70000, 'Education'),
('Machine Learning Engineer', 'Full-time', 'AIInnovations', 'San Francisco, CA', 'Develop machine learning models and algorithms.', 120000, 160000, 'Technology'),
('Pharmacy Technician', 'Full-time', 'PharmaPlus', 'Boston, MA', 'Assist pharmacists with dispensing medications.', 40000, 55000, 'Healthcare'),
('Marketing Analyst', 'Full-time', 'MarketResearch', 'New York, NY', 'Analyze market data to inform marketing strategies.', 60000, 85000, 'Marketing'),
('Tax Advisor', 'Full-time', 'TaxPros', 'Chicago, IL', 'Provide tax planning and advice to clients.', 75000, 100000, 'Finance'),
('ESL Teacher', 'Full-time', 'LanguageAcademy', 'Los Angeles, CA', 'Teach English as a Second Language.', 45000, 65000, 'Education'),
('IT Consultant', 'Full-time', 'TechConsult', 'Miami, FL', 'Provide IT consulting services to businesses.', 90000, 120000, 'Technology'),
('Clinical Nurse Specialist', 'Full-time', 'MedCare', 'Houston, TX', 'Provide specialized nursing care.', 85000, 115000, 'Healthcare'),
('Public Relations Specialist', 'Full-time', 'PRPros', 'Phoenix, AZ', 'Manage public relations strategies and campaigns.', 60000, 85000, 'Marketing'),
('Financial Auditor', 'Full-time', 'AuditMasters', 'New York, NY', 'Conduct financial audits and ensure compliance.', 75000, 100000, 'Finance'),
('Librarian', 'Full-time', 'CityLibrary', 'San Francisco, CA', 'Manage library resources and assist patrons.', 45000, 65000, 'Education'),
('Cloud Engineer', 'Full-time', 'CloudTech', 'Austin, TX', 'Design and manage cloud-based systems.', 95000, 130000, 'Technology'),
('Medical Laboratory Technician', 'Full-time', 'MedLabs', 'Boston, MA', 'Perform laboratory tests and procedures.', 50000, 70000, 'Healthcare'),
('Digital Marketing Coordinator', 'Full-time', 'DigitalMedia', 'Los Angeles, CA', 'Coordinate digital marketing efforts.', 55000, 80000, 'Marketing'),
('Financial Planner', 'Full-time', 'WealthManagement', 'Chicago, IL', 'Develop financial strategies for clients.', 85000, 115000, 'Finance'),
('Kindergarten Teacher', 'Full-time', 'KidsFirst', 'Seattle, WA', 'Teach and care for kindergarten students.', 45000, 65000, 'Education'),
('Cybersecurity Analyst', 'Full-time', 'SecureTech', 'New York, NY', 'Protect IT systems from cyber threats.', 90000, 120000, 'Technology'),
('Speech-Language Pathologist', 'Full-time', 'SpeechCare', 'Houston, TX', 'Diagnose and treat communication disorders.', 75000, 100000, 'Healthcare'),
('Brand Strategist', 'Full-time', 'BrandMasters', 'Phoenix, AZ', 'Develop and implement brand strategies.', 70000, 95000, 'Marketing'),
('Investment Analyst', 'Full-time', 'InvestmentPros', 'San Francisco, CA', 'Analyze investment opportunities and risks.', 80000, 110000, 'Finance'),
('Art Teacher', 'Full-time', 'CreativeSchool', 'Denver, CO', 'Teach art classes to students.', 45000, 65000, 'Education'),
('Systems Administrator', 'Full-time', 'SysAdminCorp', 'Los Angeles, CA', 'Manage and maintain IT systems.', 75000, 105000, 'Technology'),
('Medical Records Technician', 'Full-time', 'HealthRecords', 'Miami, FL', 'Manage and maintain patient medical records.', 45000, 60000, 'Healthcare'),
('Content Marketing Manager', 'Full-time', 'ContentMasters', 'New York, NY', 'Oversee content creation and marketing strategies.', 80000, 110000, 'Marketing'),
('Risk Manager', 'Full-time', 'RiskAnalysis', 'Chicago, IL', 'Identify and manage financial risks.', 90000, 120000, 'Finance'),
('History Teacher', 'Full-time', 'EduHistory', 'San Francisco, CA', 'Teach history subjects to students.', 50000, 70000, 'Education'),
('Software Developer', 'Full-time', 'DevSolutions', 'Seattle, WA', 'Develop and maintain software applications.', 85000, 120000, 'Technology'),
('Nurse Practitioner', 'Full-time', 'WellnessCare', 'Houston, TX', 'Provide primary and specialty healthcare services.', 95000, 130000, 'Healthcare'),
('Advertising Manager', 'Full-time', 'AdMasters', 'Phoenix, AZ', 'Oversee advertising campaigns and strategies.', 75000, 105000, 'Marketing'),
('Financial Consultant', 'Full-time', 'FinanceAdvisors', 'Boston, MA', 'Provide financial consulting services to clients.', 85000, 115000, 'Finance'),
('English Teacher', 'Full-time', 'LiteratureAcademy', 'Los Angeles, CA', 'Teach English language and literature.', 45000, 65000, 'Education'),
('Front-End Developer', 'Full-time', 'WebDesign', 'San Francisco, CA', 'Develop front-end features for websites.', 85000, 120000, 'Technology'),
('Phlebotomist', 'Full-time', 'LabCare', 'Chicago, IL', 'Draw blood and prepare samples for testing.', 40000, 55000, 'Healthcare'),
('Social Media Coordinator', 'Full-time', 'SocialMediaPros', 'New York, NY', 'Coordinate social media content and campaigns.', 55000, 80000, 'Marketing'),
('Tax Specialist', 'Full-time', 'TaxMasters', 'Houston, TX', 'Provide tax preparation and planning services.', 70000, 95000, 'Finance'),
('Elementary Teacher', 'Full-time', 'PrimaryAcademy', 'Miami, FL', 'Teach elementary school students.', 45000, 65000, 'Education');
