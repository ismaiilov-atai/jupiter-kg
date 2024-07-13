import { NextIntlClientProvider } from 'next-intl';
import { FC, ReactElement } from 'react';

import messages from '../../messages/ru.json';

interface TestRendererProps {
	element: ReactElement;
}

const Test_renderer: FC<TestRendererProps> = ({ element }) => {
	return (
		<NextIntlClientProvider locale='ru' messages={messages}>
			{element}
		</NextIntlClientProvider>
	);
};

export default Test_renderer;
