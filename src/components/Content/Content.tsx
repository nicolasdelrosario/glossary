import { NotFound, Loader } from '@/components'
import { Definition } from '@/components/Content/components'
import { IWordData } from '@/types/word-data'

interface ContentProps {
	loading: boolean
	definition: IWordData[]
}

const Content: React.FC<ContentProps> = ({ loading, definition }) => {
	if (loading) {
		return <Loader />
	}

	return (
		<>
			{definition.length > 0 ? (
				<Definition wordData={definition} />
			) : (
				<NotFound />
			)}
		</>
	)
}

export default Content
