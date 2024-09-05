import UpdateFrom from '@/components/ui/UpdateFrom';

const EditDocument = ({params}) => {
    const id = params.editId
    return (
        <div>
          <UpdateFrom id={id} />
        </div>
    );
};

export default EditDocument;