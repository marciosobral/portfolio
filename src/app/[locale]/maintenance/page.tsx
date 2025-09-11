import { MaintenancePage } from '@/src/components/maintenance/MaintenancePage';
import { getDictionary } from '@/src/lib/dictionaries';
import { Locale } from '@/src/lib/i18n';

interface MaintenancePageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Maintenance({ params }: MaintenancePageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <MaintenancePage dict={dict} locale={locale} />;
}
