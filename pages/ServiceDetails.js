import { useRouter } from 'next/router';
import servicesData from '../data/servicesData';

export default function ServiceDetails() {
  const router = useRouter();
  const { service } = router.query;

  if (!service) {
    return <div>Loading...</div>; // Or any other placeholder component
  }

  const selectedService = servicesData.find(
    (item) => item.title.toLowerCase() === service.toLowerCase()
  );

  if (!selectedService) {
    return <div>Service not found</div>; // Or you can display a custom error message or redirect to a 404 page
  }

  return (
    <div>
      <h1>{selectedService.title}</h1>
      <p>{selectedService.description}</p>
    </div>
  );
}
