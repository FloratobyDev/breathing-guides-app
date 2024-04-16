import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("instructions").del();
  await knex("techniques").del();

  await knex.raw(`
  INSERT INTO techniques (purpose, difficulty, culture, duration, name, description)
  VALUES
    ('Relaxation', 'easy', 'Western', 5, '4-7-8', 'The 4-7-8 breathing technique is a breathing pattern developed by Dr. Andrew Weil. It is based on an ancient yogic technique called pranayama, which helps practitioners gain control over their breathing. The 4-7-8 technique is designed to help people fall asleep more easily by reducing anxiety and promoting relaxation.'),
    ('Focus', 'medium', 'Western', 5, 'Box Breathing', 'Box breathing is a technique used to calm yourself down when you are feeling anxious or stressed. It is a simple and effective way to reduce stress and improve your focus. Box breathing involves taking slow, deep breaths in a pattern that forms a square or box shape.'),
    ('Relaxation', 'easy', 'Western', 5, 'Deep Breathing', 'Deep breathing is a relaxation technique that can help reduce stress and anxiety. It involves taking slow, deep breaths to help calm your mind and body. Deep breathing can be done anywhere and at any time, making it a convenient way to relax and de-stress.'),
    ('Focus', 'medium', 'Western', 5, 'Equal Breathing', 'Equal breathing is a breathing technique that involves inhaling and exhaling for the same amount of time. This technique can help calm your mind and body, reduce stress, and improve your focus. Equal breathing is a simple and effective way to relax and de-stress.'),
    ('Relaxation', 'easy', 'Western', 5, 'Guided Visualization', 'Guided visualization is a relaxation technique that involves imagining a peaceful scene or setting. This technique can help calm your mind and body, reduce stress, and improve your focus. Guided visualization is a simple and effective way to relax and de-stress.'),
    ('Focus', 'medium', 'Western', 5, 'Mindful Breathing', 'Mindful breathing is a meditation technique that involves focusing on your breath. This technique can help calm your mind and body, reduce stress, and improve your focus. Mindful breathing is a simple and effective way to relax and de-stress.'),
    ('Relaxation', 'easy', 'Western', 5, 'Progressive Muscle Relaxation', 'Progressive muscle relaxation is a relaxation technique that involves tensing and relaxing different muscle groups in your body. This technique can help calm your mind and body, reduce stress, and improve your focus. Progressive muscle relaxation is a simple and effective way to relax and de-stress.'),
    ('Focus', 'medium', 'Western', 5, 'Ujjayi Breathing', 'Ujjayi breathing is a yoga breathing technique that involves breathing through your nose while constricting the back of your throat. This technique can help calm your mind and body, reduce stress, and improve your focus. Ujjayi breathing is a simple and effective way to relax and de-stress.'),
    ('Relaxation', 'easy', 'Western', 5, 'Visualization', 'Visualization is a relaxation technique that involves imagining a peaceful scene or setting. This technique can help calm your mind and body, reduce stress, and improve your focus. Visualization is a simple and effective way to relax and de-stress.'),
    ('Focus', 'medium', 'Western', 5, 'Wim Hof Breathing', 'Wim Hof breathing is a breathing technique developed by Wim Hof, also known as the Iceman. It involves taking deep breaths and holding your breath to increase your oxygen intake and improve your focus. Wim Hof breathing can help calm your mind and body, reduce stress, and improve your focus.')
`);

  await knex.raw(`
    INSERT INTO instructions (techniqueId, instruction_order, name, description)
    VALUES
      (1, 1, 'Inhale', 'Inhale through your nose for a count of 4 seconds.'),
      (1, 2, 'Hold', 'Hold your breath for a count of 7 seconds.'),
      (1, 3, 'Exhale', 'Exhale through your mouth for a count of 8 seconds.'),
      (2, 1, 'Inhale', 'Inhale through your nose for a count of 4 seconds.'),
      (2, 2, 'Hold', 'Hold your breath for a count of 4 seconds.'),
      (2, 3, 'Exhale', 'Exhale through your mouth for a count of 4 seconds.'),
      (2, 4, 'Hold', 'Hold your breath for a count of 4 seconds.'),
      (3, 1, 'Inhale', 'Inhale through your nose for a count of 4 seconds.'),
      (3, 2, 'Exhale', 'Exhale through your mouth for a count of 4 seconds.'),
      (4, 1, 'Inhale', 'Inhale through your nose for a count of 4 seconds.'),
      (4, 2, 'Exhale', 'Exhale through your mouth for a count of 4 seconds.'),
      (5, 1, 'Visualize', 'Visualize a peaceful scene or setting.'),
      (6, 1, 'Focus', 'Focus on your breath.'),
      (7, 1, 'Tense', 'Tense a muscle group for a count of 5 seconds.'),
      (7, 2, 'Relax', 'Relax the muscle group for a count of 5 seconds.'),
      (8, 1, 'Inhale', 'Inhale through your nose for a count of 4 seconds.'),
      (8, 2, 'Exhale', 'Exhale through your nose for a count of 4 seconds.'),
      (9, 1, 'Visualize', 'Visualize a peaceful scene or setting.'),
      (10, 1, 'Breathe', 'Breathe deeply and hold your breath for a count of 10 seconds.'),
      (10, 2, 'Exhale', 'Exhale through your mouth for a count of 10 seconds.')
  `);
}
