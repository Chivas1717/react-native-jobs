import { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
  const router = useRouter();
  // const { data, isLoading, error } = useFetch('search', {
  //   query: 'React developer',
  //   num_pages: '1',
  // });
  const isLoading = false;
  const error = null;
  const data = [
    {
      employer_company_type: null,
      employer_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREroK3iLsY8CwCfpKcCn3hQdZy5Zf_6RvqAoDl&s=0',
      employer_name: 'Clevertech',
      employer_website: null,
      job_apply_is_direct: false,
      job_apply_link:
        'https://www.linkedin.com/jobs/view/fullstack-python-react-developer-at-clevertech-3646506092',
      job_apply_quality_score: 0.5554,
      job_benefits: null,
      job_city: null,
      job_country: 'US',
      job_description:
        "Experience Remote done Right. Over 20 years of remote experience, all 500+ staff are 100% remote and we still grow vibrant relationships, provide exceptional opportunities for career growth while working with stellar clients on ambitious projects\n\nWhat we're working on:\n\nEnterprise companies turn to us to help them launch innovative digital products that interact with hundreds of millions of customers, transactions and data points. The problems we solve every day are real and require creativity, grit and determination. We are building a culture that challenges norms while fostering experimentation and personal growth. In order to grasp the scale of problems we face, ideally, you have some exposure to Logistics, FinTech, Transportation, Insurance, Media or other complex multifactor industries\n\nRequirements\n• 7+ years experience in Python and React\n• Senior-level experience with Javascript, React, Python, and Django\n• Nice to have experience with AgGrid, Bulma, Sass, and React Testing Library\n• Ability to create clean, modern, testable, well-documented code\n• Ideally, you have delivered business-critical software to large enterprises\n• Advanced-level English; ability to clearly communicate complex concepts verbally\n\nStraight from the Devs\n\nWatch short snippets of actual developers (Real, not scripted) share why they joined YouTube Playlist\n\nWhy Clevertech is an amazing place to work at\n\nAt Clevertech, you can expect that you will:\n• Be 100% dedicated to one project at a time so that you can hone your skills, innovate and grow\n• Be a part of a team of talented and friendly senior-level developers\n• Work on projects that allow you to use cutting edge tech. We believe in constantly evolving your mastery\n\nThe result? We produce meaningful work and we are truly proud and excited to be creating waves in an industry under transformation.",
      job_employment_type: 'FULLTIME',
      job_experience_in_place_of_education: false,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=HDOaSf65B98AAAAAAAAAAA%3D%3D',
      job_highlights: { Qualifications: Array(6), Responsibilities: Array(1) },
      job_id: 'HDOaSf65B98AAAAAAAAAAA==',
      job_is_remote: true,
      job_job_title: null,
      job_latitude: 37.09024,
      job_longitude: -95.71289,
      job_max_salary: null,
      job_min_salary: null,
      job_offer_expiration_datetime_utc: '2023-07-26T09:51:24.000Z',
      job_offer_expiration_timestamp: 1690365084,
      job_onet_job_zone: '4',
      job_onet_soc: '15113300',
      job_posted_at_datetime_utc: '2023-06-26T09:51:24.000Z',
      job_posted_at_timestamp: 1687773084,
      job_posting_language: 'en',
      job_publisher: 'LinkedIn',
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: true,
      },
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: 240,
        experience_mentioned: true,
        experience_preferred: false,
      },
      job_required_skills: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_state: null,
      job_title: 'Fullstack Python/React Developer',
    },
    // {
    //   name: 'test',
    //   salary: 12678,
    //   job_id: 2,
    // },
    // {
    //   name: 'test',
    //   salary: 12678,
    //   job_id: 3,
    // },
    // {
    //   name: 'test',
    //   salary: 12678,
    //   job_id: 4,
    // },
  ];
  console.log(data);

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
