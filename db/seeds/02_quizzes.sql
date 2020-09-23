-- quiz_categories table seeds
INSERT INTO quizzes (quiz_category_id, name, description, pin, public, time_limit , user_id, active) VALUES (1, 'Onboarding', 'This welcome quiz will teach how to use this app!', 012345, true, 600, 47, true);
INSERT INTO quizzes (quiz_category_id, name, description, pin, public, time_limit , user_id, active) VALUES (1, 'CSS', 'How do we style HTML and make it look nice?', 123456, true, 600, 47, true);
INSERT INTO quizzes (quiz_category_id, name, description, pin, public, time_limit , user_id, active) VALUES (1, 'Web Forms', 'How do users enter and provide data ?', 234567, true, 600, 47, true);
INSERT INTO quizzes (quiz_category_id, name, description, pin, public, time_limit , user_id, active) VALUES (1, 'DOM Events', 'How do we get around webpage elements?', 345678, true, 600, 47, true);
INSERT INTO quizzes (quiz_category_id, name, description, pin, public, time_limit , user_id, active) VALUES (1, 'What is AJAX?', 'How do we do cool stuff and not reload the page?', 345679, true, 600, 47, true);
INSERT INTO quizzes (quiz_category_id, name, description, pin, public, time_limit , user_id, active) VALUES (1, 'jQuery', 'How can I do javascript even lazier?', 456789, true, 600, 47, true);
INSERT INTO quizzes (quiz_category_id, name, description, pin, public, time_limit , user_id, active) VALUES (1, 'Private Active Quiz', 'How do we publish a private quiz?', 345679, false, 600, 47, true);
INSERT INTO quizzes (quiz_category_id, name, description, pin, public, time_limit , user_id, active) VALUES (1, 'Public Inactive Quiz', 'How do we make our quiz inactive?', 345679, true, 600, 47, false);
INSERT INTO quizzes (quiz_category_id, name, description, pin, public, time_limit , user_id, active) VALUES (1, 'Private Inactive Quiz', 'How can we make our private quiz inactive?', 456789, false, 600, 47, false);

-- for design testing
INSERT INTO quizzes (quiz_category_id, name, description, pin, public, time_limit , user_id, active) VALUES (5, 'Star Wars Trivia', 'From Courasant to the Outer Rimm, test your fandom level!', 456789, true, 600, 47, true);
INSERT INTO quizzes (quiz_category_id, name, description, pin, public, time_limit , user_id, active) VALUES (5, 'Game of Thrones Trivia', 'From Kings Landing to Winterfell, winter is coming!', 456789, true, 600, 47, true);
INSERT INTO quizzes (quiz_category_id, name, description, pin, public, time_limit , user_id, active) VALUES (5, 'Superheroes', 'From the MCU to DCU and beyond!', 456789, true, 600, 47, true);
