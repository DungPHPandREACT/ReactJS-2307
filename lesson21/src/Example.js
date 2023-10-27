import React, { useEffect } from 'react';

const Example = () => {
	useEffect(() => {
		let heightPrevious = 0;
		window.addEventListener('scroll', () => {
			const btnBackToTop = document.getElementById('btn-back-to-top');
			const newHeight = window.pageYOffset;
			if (newHeight < heightPrevious && newHeight > 100) {
				console.log('srcoll lên');
				btnBackToTop.style.display = 'block';
			} else {
				btnBackToTop.style.display = 'none';
				console.log('srcoll xuống');
			}

			heightPrevious = window.pageYOffset;
		});
	}, []);

	const handleBackToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div
			id='container'
			className='container'
			style={{ width: '50%', margin: 'auto' }}
		>
			<button
				id='btn-back-to-top'
				style={{
					width: '60px',
					height: '60px',
					border: 'none',
					bottom: '50px',
					right: '50px',
					position: 'fixed',
					display: 'none',
				}}
				onClick={handleBackToTop}
			>
				Top
			</button>
			<p>
				Contrary to popular belief, Lorem Ipsum is not simply random text. It
				has roots in a piece of classical Latin literature from 45 BC, making it
				over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in
				Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in
				classical literature, discovered the undoubtable source. Lorem Ipsum
				comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
				Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the
				Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of
				Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
				Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
				Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from 45 BC,
				making it over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
				Cicero, written in 45 BC. This book is a treatise on the theory of
				ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
				1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
				reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
				"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
				since the 1500s is reproduced below for those interested. Sections
				1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.
			</p>
		</div>
	);
};

export default Example;
