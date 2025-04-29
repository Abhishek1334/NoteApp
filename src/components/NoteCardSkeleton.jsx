import React from 'react'

const NoteCardSkeleton = () => {
	return (
		<div className="border border-gray-200 p-4 rounded-lg shadow-sm animate-pulse">
			<div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
			<div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
			<div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
			<div className="mt-2 flex justify-end gap-5">
				<div className="h-8 w-16 bg-gray-300 rounded-2xl"></div>
				<div className="h-8 w-16 bg-gray-300 rounded-2xl"></div>
			</div>
		</div>
	);	
}

export default NoteCardSkeleton